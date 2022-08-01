import React from 'react'
import { Header, Table, Image, Button, Icon } from 'semantic-ui-react'
import { fetcher, User } from '../utils/fetcher'

interface UsersTableProps {
  users: User[]
  setUserToBeEdited: (user: User) => void
  toggleEditUserForm: () => void
  setUsers: (users: User[]) => void
}


function UsersTable({ users, setUserToBeEdited, toggleEditUserForm, setUsers }: UsersTableProps) {

  const capitalizeFirsLetter = (s: string) => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
  }
  function populateEditUserForm(user: User) {
    setUserToBeEdited(user)
  }

  return (
    <Table basic="very" celled >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body >
        {
          users.map((user) => (
            <Table.Row key={Number(user.id)}>
              <Table.Cell collapsing>
                <Header as={"h4"} image>
                  <Image src={user.avatar} rounded size='mini' alt=""></Image>
                  <Header.Content>
                    {capitalizeFirsLetter(String(user.firstName)) + " " + capitalizeFirsLetter(String(user.lastName))}
                    <Header.Subheader>{capitalizeFirsLetter(String(user.role))}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{String(user.email)}</Table.Cell>
              <Table.Cell collapsing textAlign='center'>
                <Button
                  animated="fade"
                  color='blue'
                  onClick={async () => {
                    toggleEditUserForm()
                    populateEditUserForm(user)
                  }}>
                  <Button.Content visible>Edit</Button.Content>
                  <Button.Content hidden>
                    <Icon name="edit" />
                  </Button.Content>
                </Button>

                <Button
                  animated="fade"
                  color='red'
                  onClick={async () => {
                    await fetcher("/api/delete", "DELETE", { id: user.id })
                    await setUsers(users.filter(usr => usr.id !== user.id))
                  }}>
                  <Button.Content visible>Delete</Button.Content>
                  <Button.Content hidden>
                    <Icon name="user delete" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>

    </Table>
  )
}

export default UsersTable