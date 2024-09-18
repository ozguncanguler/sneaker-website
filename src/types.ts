import React from "react";

export interface NavbarProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}
