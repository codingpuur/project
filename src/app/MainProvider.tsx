"use client";
import Store from "@/Redux/Store";
import React from "react";
import { Provider } from "react-redux";
import './globals.css';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      <Provider store={Store}>{children}</Provider>
  );
};

export default MainProvider;
