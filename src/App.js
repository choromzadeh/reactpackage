import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const GROUP1 = [
  "https://images.unsplash.com/flagged/photo-1551706646-9c816bfbff8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1551633550-64761da5342b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
];

const GROUP2 = [
  "https://images.unsplash.com/photo-1551833726-deb5e781c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1551803021-92431219e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1551852284-ce16dd4d63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

const PhotoItem = ({ image, group }) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

function App() {
  return (
    <LightgalleryProvider
      onAfterSlide={() => {
        console.log("onAfterSlide");
      }}
    >
      <h1 style={{ textAlign: "center" }}>Group 1</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        {GROUP1.map((p, idx) => (
          <PhotoItem key={idx} image={p} group="group1" />
        ))}
      </div>
      <h1 style={{ textAlign: "center" }}>Group 2</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        {GROUP2.map((p, idx) => (
          <PhotoItem key={idx} image={p} group="group2" />
        ))}
      </div>
    </LightgalleryProvider>
  );
}

export default App;
