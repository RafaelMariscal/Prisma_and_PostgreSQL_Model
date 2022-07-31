import { Prisma } from "@prisma/client"

type Methods = "GET" | "POST" | "PUT" | "DELETE"

type DataProps = {
  user: Prisma.UserCreateInput
}

type fetcherProps = (url: string, method: Methods, data?) => void

export const fetcher: fetcherProps = (url, method, data: DataProps) => {
  fetch(window.location.origin + url, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json()
  })
} 