import { Button, Container, Divider, Form, Header, Icon, Image, Modal, Table } from 'semantic-ui-react'
import { Prisma } from '.prisma/client';
import { fetcher } from '../utils/fetcher';

type RoleOptions = {
  key: string
  text: "DEVELOPER" | "USER" | "ADMIN"
  value: "DEVELOPER" | "USER" | "ADMIN"
}

type User = Prisma.UserUncheckedCreateInput | Prisma.UserUncheckedUpdateInput

interface EditFormProps {
  users: User[]
  userToBeEdited: User


  toggleEditUserForm: () => void
  setUserToBeEdited: (user: User) => void
  setUsers: (updatedUsersList: User[]) => void
}

const options = [
  { key: "m", text: "DEVELOPER", value: "DEVELOPER" },
  { key: "u", text: "USER", value: "USER" },
  { key: "a", text: "ADMIN", value: "ADMIN" },
]



function EditForm({ users, userToBeEdited, toggleEditUserForm, setUserToBeEdited, setUsers }: EditFormProps) {

  const handleEditRoleChange = (e, { value }) => setUserToBeEdited({ ...userToBeEdited, role: value })
  return (
    <Form >
      <Form.Group widths="equal">

        <Form.Input
          fluid
          label="First Name"
          placeholder="First Name"
          value={userToBeEdited.firstName}
          onChange={(e) => setUserToBeEdited({ ...userToBeEdited, firstName: e.target.value })}
        /><br />
        <Form.Input
          fluid
          label="Last Name"
          placeholder="Last Name"
          value={userToBeEdited.lastName}
          onChange={(e) => setUserToBeEdited({ ...userToBeEdited, lastName: e.target.value })}
        /><br />

        <Form.Input
          fluid
          label="Email"
          placeholder="Email"
          value={userToBeEdited.email}
          onChange={(e) => setUserToBeEdited({ ...userToBeEdited, email: e.target.value })}
        /><br />
        <Form.Input
          fluid
          label="Avatar"
          placeholder="Avatar"
          value={userToBeEdited.avatar}
          onChange={(e) => setUserToBeEdited({ ...userToBeEdited, avatar: e.target.value })}
        /><br />
        <Form.Select
          fluid
          label="Role"
          placeholder="Role"
          options={options}
          value={String(userToBeEdited.role)}
          onChange={() => handleEditRoleChange}
        />
      </Form.Group>

      <Container style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
        <Form.Button
          color='teal'
          onClick={toggleEditUserForm}
        >Cancel</Form.Button>
        <Form.Button
          color='blue'
          onClick={async () => {
            await fetcher("/api/update", "PUT", { user: userToBeEdited })
            const updatedUsersList = users.map(user => {
              if (user.id === userToBeEdited.id) {
                return user = userToBeEdited
              }
              return user
            })
            setUsers(updatedUsersList)
            toggleEditUserForm()
          }}
        >Confirm Edit</Form.Button>
      </Container>
    </Form>
  )
}

export default EditForm