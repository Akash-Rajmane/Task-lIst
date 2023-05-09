import React from 'react';
import "./dashboard.css";

interface props {
  children:  React.ReactNode ;
}
const Dashboard:React.FC<props> = ({children}) => {
  return (
    <main className={"dashboard"}>
      {children}
    </main>
  )
}

export default Dashboard;