import Image from "next/image";
import styles from "./cards.module.css";
import Link from "next/link";
export default function Card() {
  return (
    <div>
      <div className="card overflow-hidden card-compact max-w-96 w-[9.7rem] xs:w-[13rem] sm:w-[15rem]  lg:w-[16rem] transition-all duration-700 hover:scale-105 sm:rounded-2xl rounded-[0.5rem]  hover:shadow-xl border-slate-100 border-2 ">
        <div>
          <h2 className="sm:text-xl xs:text-lg text-base font-semibold text-center sm:py-8 py-6">
            Splender Plus
          </h2>

          <figure>
            <Image
              className="rounded-xl"
              src="/rentbikes.png"
              alt="Shoes"
              width={500}
              height={300}
            ></Image>
          </figure>
        </div>
        <div
          className={`${styles.card__footer}  bg-[#ECEADE] items-center text-center relative sm:rounded-[0.6rem] rounded-[0.5rem]`}
        >
          <div className={styles.card__footer__line}></div>
          <h2>
            <span>₹ </span>600 <span>/day</span>
          </h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <Link href="tel:74706 02088" className="active:scale-95">
            <button className={styles.yellow_button}>Book your ride</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
