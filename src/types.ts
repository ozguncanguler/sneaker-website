import React from "react";

export interface NavbarProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
  isTopOfPage: boolean;
}

export interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface ProductsProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface SolutionsProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface PricingProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface ResourcesProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface LoginProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface SignupProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}

export interface FooterProps {
  selectedPage: string;
  setSelectedPage: (selectedPage: string) => void;
}
