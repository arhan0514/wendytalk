'use client';
//import dynamic from "next/dynamic";
import useActiveChannel from "../hooks/useActiveChannel";

const ActiveStatus = () => {
  useActiveChannel();

  return null;
}
 
export default ActiveStatus;
