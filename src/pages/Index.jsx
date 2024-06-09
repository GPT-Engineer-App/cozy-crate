import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ChakraProvider, Container, Box, Text, VStack, HStack, Button, Image, IconButton, Input } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

// Home Page
const Home = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">Welcome to Our Store</Text>
      <Text>Discover the best clothing and homewares.</Text>
      <Image src="https://images.unsplash.com/photo-1625997019230-45e7dca6bba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFuZCUyMGhvbWV3YXJlc3xlbnwwfHx8fDE3MTc5MzM5NjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Home Banner" />
    </VStack>
  </Container>
);

// Collections Page
const Collections = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">Collections</Text>
      <Text>Explore our diverse collections.</Text>
      {/* Add collection items here */}
    </VStack>
  </Container>
);

// Product Page
const Product = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">Product Name</Text>
      <Image src="https://images.unsplash.com/photo-1604935067269-27c7e8b36618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8fHwxNzE3OTMzOTY1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product" />
      <Text>Description of the product.</Text>
      <Button colorScheme="teal">Add to Cart</Button>
    </VStack>
  </Container>
);

// Account Page
const Account = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">My Account</Text>
      <Text>Manage your account details.</Text>
      {/* Add account management features here */}
    </VStack>
  </Container>
);

// Wishlist Page
const Wishlist = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">Wishlist</Text>
      <Text>Your favorite items.</Text>
      {/* Add wishlist items here */}
    </VStack>
  </Container>
);

// Cart Page
const Cart = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">Shopping Cart</Text>
      <Text>Your selected items.</Text>
      {/* Add cart items here */}
    </VStack>
  </Container>
);

// Checkout Page
const Checkout = () => (
  <Container centerContent>
    <VStack spacing={4}>
      <Text fontSize="4xl">Checkout</Text>
      <Text>Complete your purchase.</Text>
      {/* Add checkout form here */}
    </VStack>
  </Container>
);

// Navigation Bar
const NavBar = () => (
  <HStack spacing={4} padding={4} bg="gray.100" width="100%">
    <Link to="/">
      <Button variant="link">Home</Button>
    </Link>
    <Link to="/collections">
      <Button variant="link">Collections</Button>
    </Link>
    <Link to="/account">
      <IconButton aria-label="Account" icon={<FaUser />} />
    </Link>
    <Link to="/wishlist">
      <IconButton aria-label="Wishlist" icon={<FaHeart />} />
    </Link>
    <Link to="/cart">
      <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
    </Link>
  </HStack>
);

// Main App Component
const App = () => (
  <ChakraProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
