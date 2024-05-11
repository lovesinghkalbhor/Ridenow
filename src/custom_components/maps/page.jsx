"use client";

import React, { useState } from "react";
import styles from "./maps.module.css";
import clsx from "clsx";
import Image from "next/image";
import capitalize from "lodash/capitalize";
import { startCase } from "lodash";

export default function Maps() {
  const string = {
    vijayNagar:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.335179749039!2d75.89112305944735!3d22.752939129277603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1709216717596!5m2!1sen!2sin",
    bholaRam:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.267173144633!2d75.86104160944446!3d22.681095979328738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd58778208d%3A0x3d1330cd2a496ce!2sBholaram%20Square!5e0!3m2!1sen!2sin!4v1709217128020!5m2!1sen!2sin",
    satyasai:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29434.18221265469!2d75.87610656846047!3d22.75525607362034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302ab9ce44de3%3A0x2f5ae087fe6377e6!2sShri%20Satyasai%20School%20Square%2C%20Scheme%20No%2054%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1709217249592!5m2!1sen!2sin",

    singapur_township:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29434.18221265469!2d75.87610656846047!3d22.75525607362034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302ab9ce44de3%3A0x2f5ae087fe6377e6!2sShri%20Satyasai%20School%20Square%2C%20Scheme%20No%2054%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1709217303253!5m2!1sen!2sin",
  };
  const [locationString, setlocationString] = useState(string.vijayNagar);
  const [location, setlocation] = useState({
    vijayNagar: true,
    bholaRam: false,
    satyasai: false,
    singapur_township: false,
  });

  function handelclick(tabkey) {
    for (const key in location) {
      setlocation((prevLocation) => ({
        ...prevLocation,
        [key]: false,
      }));

      if (tabkey == key) {
        setlocation((prevLocation) => ({
          ...prevLocation,
          [tabkey]: true,
        }));
        setlocationString(string[tabkey]);
        console.log(tabkey);
      }
    }
  }

  return (
    <>
      <div>
        <div className="flex mx-auto sm:container justify-around mt-20  sm:w-11/12 md:w-3/4 lg:w-7/12 w-full">
          {Object.keys(location).map((key) => (
            <button
              key={key}
              onClick={() => {
                handelclick(key);
              }}
              className={clsx(
                styles.map__tabs,
                location[key] && "shadow-xl  bg-white",
                location[key] && styles.maps__tab__shadow
              )}
            >
              <Image
                className={styles.maps__icon}
                src="/icons/map.png"
                width={60}
                height={60}
                alt={key}
              ></Image>
              <span>{startCase(key)}</span>
            </button>
          ))}
        </div>
        <iframe
          className={styles.map}
          src={locationString}
          width="600"
          height="450"
          //   style="border:0;"
          //   allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
