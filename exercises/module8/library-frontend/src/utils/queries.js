import { gql } from '@apollo/client'

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`
const ALL_BOOKS = gql`
  query {
    allBooks {
      id
      title
      author
      published
    }
  }
`

const CREATE_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $published: Int!, $genres:[String!]!) {
    addBook (
      title: $title
      author: $author
      published: $published
      genres: $genres
      ) {
        id
        title
        author
        published
        genres
      } 
  }
`

const EDIT_AUTHOR = gql`
  mutation EditAuthor($name: String!, $setBornTo: Int!) {
    editAuthor (
      name: $name
      setBornTo: $setBornTo
    )
  }: Author
`

export {
  ALL_AUTHORS,
  ALL_BOOKS,
  CREATE_BOOK,
  EDIT_AUTHOR
}