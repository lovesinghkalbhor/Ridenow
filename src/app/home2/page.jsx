import Image from "next/image";

import styles from "./hero.module.css";
import Link from "next/link";
import Maps from "@/custom_components/maps/page";
import Card from "@/custom_components/cards/page";
export default function Home_page() {
  return (
    <>
      <div className={`relative md:overflow-visible overflow-hidden w-full`}>
        <Image
          className={`{styles.hero__background__circle} md:brightness-75 brightness-50 `}
          src="/background-bike-image.png"
          layout="fill" // Fill the container
          objectFit="cover" // Scale and crop the image
          quality={50}
          // width={6000}
          // height={6000}
        ></Image>

        {/* <div
          className={`${styles.hero__image__container} col-span-4 col-start-8 row-span-7 row-start-3 -mr-72 hidden md:block`}
        > */}
        <Image
          className={`${styles.hero__image} hidden`}
          src="/bike-image.png"
          width={300}
          height={500}
        ></Image>
        {/* </div> */}
        <div
          className={`${styles.home__page}  md:grid grid-cols-12 grid-rows-12 mb-12 mt-32 md:mt-0`}
        >
          <div
            className={`${styles.hero__textcontent} text-center md:text-start text-white md:text-black  col-span-7 col-start-1  md:row-start-5 row-start-3 `}
          >
            <h6 className={`${styles.hero__slogan}`}>
              We are with you in you Every ride
            </h6>
            <h1 className={styles.hero_heading}>
              Make Your Ride{" "}
              <span className={`${styles.hero__highlighted}`}>
                Cheap <br></br>
              </span>{" "}
              &
              <span className={`${styles.hero__highlighted}`}>
                {" "}
                Affordable.
              </span>
            </h1>
            <p>
              With no prior experience needed, you can quickly get started with
              your cloud services. After signing up and picking a plan, our
            </p>
            <Link
              href="tel:9340233410"
              className="btn btn-warning text-white  md:w-40"
            >
              Button
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.section} container mx-auto hidden `}>
        <div className={styles.section__heading__container}>
          <div>
            <h2 className={styles.section__heading}>
              Why Choose Us, What we Provide
            </h2>
            <p className={styles.section__heading__para}>
              With no prior experience needed, you can quickly get started with
              your cloud services. After signing up and picking a plan
            </p>
          </div>
        </div>

        <div className={`${styles.section_one}`}>
          <div className={`${styles.features} `}>
            <div className={styles.features_logo_container}>
              <Image
                className={styles.features_logo}
                src="/icons/icon.png"
                width={60}
                height={60}
              ></Image>
            </div>
            <div>
              <h4 className={`${styles.features_heading}`}>
                First class service
              </h4>
              <p className={`${styles.features_para} `}>
                With no prior experience needed, <br></br>you can quickly get
                started with your{" "}
              </p>
            </div>
          </div>
          <div className={`${styles.features} row-start-9 `}>
            <div className={styles.features_logo_container}>
              <Image
                className={styles.features_logo}
                src="/icons/icon.png"
                width={60}
                height={60}
              ></Image>
            </div>
            <div>
              <h4 className={`${styles.features_heading} `}>
                First class service
              </h4>
              <p className={`${styles.features_para} `}>
                With no prior experience needed, <br></br>you can quickly get
                started with your{" "}
              </p>
            </div>
          </div>
          <div className={`${styles.features} col-start-[15] row-start-9`}>
            <div className={styles.features_logo_container}>
              <Image
                className={styles.features_logo}
                src="/icons/icon.png"
                width={60}
                height={60}
              ></Image>
            </div>
            <div>
              <h4 className={`${styles.features_heading} `}>
                First class service
              </h4>
              <p className={`${styles.features_para} `}>
                With no prior experience needed,<br></br> you can quickly get
                started with your{" "}
              </p>
            </div>
          </div>
          <div className={`${styles.features} col-start-[15]`}>
            <div className={styles.features_logo_container}>
              <Image
                className={styles.features_logo}
                src="/icons/icon.png"
                width={60}
                height={60}
              ></Image>
            </div>
            <div>
              <h4 className={`${styles.features_heading} `}>
                First class service
              </h4>
              <p className={`${styles.features_para} `}>
                With no prior experience needed,<br></br> you can quickly get
                started with your{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.section} container mx-auto `}>
        <div className={styles.section__heading__container}>
          <div>
            <h2 className={styles.section__heading}>
              Find Rentaly branches all Over Indore click on the google map
              below to navigate your location{" "}
            </h2>
          </div>
        </div>
        <Maps></Maps>
      </div>
      <div className={`${styles.section} container mx-auto `}>
        <div className={styles.section__heading__container}>
          <div>
            <h2 className={styles.section__heading}>
              Find Rentaly branches all Over Indore click on the google map
              below to navigate your location{" "}
            </h2>
            <p className={styles.section__heading__para}>
              With no prior experience needed, you can quickly get started with
              your cloud services. After signing up and picking a plan
            </p>
          </div>
        </div>
        <div
          className={`${styles.section} grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-2   lg:gap-x-0 sm:gap-x-0 gap-5 gap-y-10  justify-items-center`}
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}
