import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();

test('new cart should be empty', () => {
  expect(cart.items.length).toBe(0);
});

test('add a Book to the cart', () => {
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toBe(1);
});

test('add a MusicAlbum to the cart', () => {
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.items.length).toBe(2);
});

test('add a Movie to the cart', () => {
  cart.add(new Movie(1010, 'The Avengers', 800, 2012, 'USA', 'Avangers Assemble', 'sci-fi, action, fantasy, adventure', 137));
  expect(cart.items.length).toBe(3);
});
