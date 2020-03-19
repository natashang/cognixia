import React from 'react';
//import logo from './logo.svg';
import './App.css';

// components
import Carousel from '../carousel/carousel'

//export default class App extends React.Component{
export default function App(){

  const carouselData = [
    { id:1, url:"https://i.picsum.photos/id/1049/3900/3120.jpg" },
    { id:2, url:"https://i.picsum.photos/id/1040/4496/3000.jpg" },
    { id:3, url:"https://i.picsum.photos/id/1044/4032/2268.jpg" },
    { id:4, url:"https://i.picsum.photos/id/106/2592/1728.jpg" },
    { id:5, url:"https://i.picsum.photos/id/152/3888/2592.jpg" }
  ]

    return (
      <div>
        <Carousel
          data={carouselData}
        />
      </div>
    );
  
}