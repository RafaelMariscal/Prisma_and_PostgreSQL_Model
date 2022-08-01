import { Prisma } from '@prisma/client'
import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { fetcher, User } from '../utils/fetcher'


interface AddUserFormProps {
  users: User[]
  setUsers: (users: User[]) => void
}

function AddUserForm({ users, setUsers }: AddUserFormProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState("")
  const [role, setRole] = useState()

  const options = [
    { key: "m", text: "DEVELOPER", value: "DEVELOPER" },
    { key: "u", text: "USER", value: "USER" },
    { key: "a", text: "ADMIN", value: "ADMIN" },
  ]

  const handleRoleChange = (e, { value }) => setRole(value)

  async function handleCreateUser() {
    const createFormValues = [firstName, lastName, email, avatar, role]
    if (createFormValues.filter(Boolean).length < 5) {
      return alert('All the camps needs to be filled.')
    }

    const body: Prisma.UserCreateInput = {
      firstName,
      lastName,
      role,
      email,
      avatar
    }

    await fetcher("/api/create", "POST", { user: body, })
    await setUsers([...users, body])
    setFirstName("")
    setLastName("")
    setEmail("")
    setAvatar("")
    setRole(null)
  }

  return (
    <Form onSubmit={handleCreateUser} style={{ textAlign: "end" }}>
      <Form.Group widths="equal" style={{ textAlign: "start" }}>
        <Form.Input
          required
          fluid
          label="First Name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br />
        <Form.Input
          required
          fluid
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /><br />

        <Form.Input
          required
          fluid
          label="Email"
          placeholder="Email"
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <Form.Input
          required
          fluid
          label="Avatar"
          placeholder="Avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        /><br />
        <Form.Select
          required
          fluid
          label="Role"
          placeholder="Role"
          options={options}
          value={role}
          onChange={handleRoleChange}
        />
      </Form.Group>
      <Form.Button color='teal'>Submit</Form.Button>
    </Form>

  )
}

export default AddUserForm