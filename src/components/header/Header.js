import React, { useContext, useRef, useEffect } from "react";
import styles from "./Header.module.css";

export const Header = () => {

  
	const header = useRef(null);
  
	useEffect(() => {
	  // dynamically retrieve header_1 height to set sidebar absolute position below it
	  if (header !== null) {
		let height = header.current.clientHeight;

	  }
	}, [header]);
  
	return (
	  <header className={styles.header}>
		
	  </header>
	);
  };
  