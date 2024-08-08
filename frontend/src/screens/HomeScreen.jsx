import { Row, Col } from 'react-bootstrap';
import Book from '../components/Book';
import { useGetBooksQuery } from '../slices/bookApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useParams } from 'react-router-dom';
import Paginate from '../components/Paginate';

const HomeScreen = () => {
  const { pageNumber } = useParams();

  console.log(pageNumber);
  const { data, isLoading, error } = useGetBooksQuery({
    pageNumber,
  });

  console.log(data)
  return (
      <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
        <h1>Latest Books</h1>
        <Row>
          {data.books.map((book) => (
            <Col key={book._id} sm={12} md={6} lg={4} xl={3}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
        <Paginate pages={data.pages} page={data.page} />
        </>
      )}
      </>  
  );
};
  
export default HomeScreen;