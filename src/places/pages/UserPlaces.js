import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "Skyscraper",
    imageUrl:
      "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    address: "019 New York",
    location: { lat: 55.3243, lng: -73.23423 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State",
    description: "Skyscraper",
    imageUrl:
      "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
    address: "019 New York",
    location: { lat: 55.3243, lng: -73.23423 },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
