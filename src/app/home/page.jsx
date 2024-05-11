import Image from "next/image";

import styles from "./hero.module.css";
import Link from "next/link";
import Maps from "@/custom_components/maps/page";
import Card from "@/custom_components/cards/page";
export default function Home_page() {
  return (
    <>
      <div
        className={`relative overflow-hidden h-screen md:h-auto w-full`}
        id="home"
      >
        {/* <Image
          className={styles.hero__background__circle}
          src="/background_circle.png"
          width={6000}
          height={6000}
        ></Image> */}
        <div className="xl:container">
          <div className={styles.hero__background__circle}></div>

          {/* large screen hero image */}
          <div
            className={`${styles.hero__image__container} w-full col-span-4 col-start-7 row-span-7 row-start-3 -mr-72   md:block`}
          >
            <Image
              className={`${styles.hero__image}`}
              src="/bike-image.png"
              width={300}
              height={500}
            ></Image>
          </div>

          {/* hero text content  */}
          <div
            className={`${styles.home__page} flex h-[30rem] md:h-auto md:grid grid-cols-12 grid-rows-12 mb-12 mt-32 md:mt-0`}
          >
            <div
              className={`${styles.hero__textcontent} text-center md:text-start text-white md:text-black  col-span-7 col-start-1  lg:row-start-5 md:row-start-4 row-start-3 `}
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
                With no prior experience needed, you can quickly get started
                with your cloud services. After signing up and picking a plan,
                our
              </p>
              <Link
                href="tel:74706 02088"
                className={`${styles.white_button}  `}
              >
                Book Your Ride
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        id="feature"
        className={`${styles.section} md:container mx-auto md:mt-0 mt-16`}
      >
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

        <div>
          <div className="lg:hidden md:block hidden translate-x-[10%] w-96 m-auto mt-16">
            <Image src="/bike-image.png" width={300} height={500}></Image>
          </div>
          <div className={`${styles.section_one}`}>
            <div className="lg:block hidden absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:72 ">
              <Image src="/bike-image.png" width={300} height={500}></Image>
            </div>

            <div className={`${styles.features} `}>
              <div className={styles.features_logo_container}>
                <Image
                  className={styles.features_logo}
                  src="/icons/road.png"
                  width={60}
                  height={60}
                ></Image>
              </div>
              <div>
                <h4 className={`${styles.features_heading}`}>
                  No Riding Limits
                </h4>
                <p className={`${styles.features_para} `}>
                  Odometer Won't Scare You Anymore.
                </p>
              </div>
            </div>

            <div
              className={`${styles.features} lg:row-start-13 md:row-start-7`}
            >
              <div className={styles.features_logo_container}>
                <Image
                  className={styles.features_logo}
                  src="/icons/helmet.png"
                  width={60}
                  height={60}
                ></Image>
              </div>
              <div>
                <h4 className={`${styles.features_heading} `}>Freebies</h4>
                <p className={`${styles.features_para} `}>
                  Helmets Always, Sometimes More.
                </p>
              </div>
            </div>

            <div
              className={`${styles.features} md:col-start-[15] lg:row-start-13 md:row-start-7`}
            >
              <div className={styles.features_logo_container}>
                <Image
                  className={styles.features_logo}
                  src="/icons/payments.png"
                  width={60}
                  height={60}
                ></Image>
              </div>
              <div>
                <h4 className={`${styles.features_heading} `}>
                  Secure Payments
                </h4>
                <p className={`${styles.features_para} `}>
                  Our Payment Partners are Industry Leaders.
                </p>
              </div>
            </div>
            <div className={`${styles.features} md:col-start-[15]`}>
              <div className={styles.features_logo_container}>
                <Image
                  className={styles.features_logo}
                  src="/icons/dealer.png"
                  width={70}
                  height={70}
                ></Image>
              </div>
              <div>
                <h4 className={`${styles.features_heading} `}>
                  Verified Dealers
                </h4>
                <p className={`${styles.features_para} `}>
                  Every Single Dealer is Committed to Quality Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="location"
        className={`mx-auto bg-[#FFFCF2] pb-0 sm:pt-28 pt-24 md:mt-0 mt-12`}
      >
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
      <div
        id="pricing"
        className={`${styles.section} container mx-auto  mt-16 `}
      >
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
