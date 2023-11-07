import { gql } from "@apollo/client";

export const ALL_BOOKS_QUERY = gql`
  query AllBooks {
    allBooks {
      name
      id
      cover
      author {
        name
      }
    }
  }
`;

export const FAVORITES_BOOKS_QUERY = gql`
  query favoriteBooks {
    favoriteBooks {
      name
      id
      cover
      author {
        name
      }
    }
  }
`;

export const FAVORITES_AUTHORS_QUERY = gql`
  query favoriteAuthors {
    favoriteAuthors {
      name
      picture
      booksCount
    }
  }
`;

export const BOOK_DETAIL_QUERY = gql`
  query BookDetail($id: ID!) {
    book(id: $id) {
      name
    }
  }
`;
