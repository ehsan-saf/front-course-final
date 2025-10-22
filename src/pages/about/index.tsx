import { IconBox, ImageView } from "@/components";
import NumberFlow from "@number-flow/react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { number } from "zod";

export default function Page() {
  const [numbers, setNumbers] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    advisors: 0,
    sale: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNumbers({
            years: 12,
            clients: 360,
            projects: 580,
            advisors: 160,
            sale: 48,
          });
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mt-[70px]">
      <div className="flex flex-col gap-14 lg:flex-row lg:items-start">
        <ImageView
          src="/images/about-top-image.jpg"
          width={867}
          height={1300}
          wrapperClassName="max-w-[300px] lg:max-w-[646px] self-center md:self-start"
        />
        <div>
          <h1 className="text-center text-[40px] md:text-start">
            Welcome to NestMart
          </h1>
          <p className="mt-11 max-w-[600px] font-lato text-body md:p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="mt-10 max-w-[600px] font-lato text-body md:p-0">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <div className="mt-14 flex gap-8">
            <ImageView
              src="/images/about-image-1.jpg"
              wrapperClassName="w-[100px] h-[100px] lg:w-[182px] lg:h-[224px]"
              width={900}
              height={1300}
            />
            <ImageView
              src="/images/about-image-2.jpg"
              wrapperClassName="w-[100px] h-[100px] lg:w-[182px] lg:h-[224px]"
              width={900}
              height={1300}
            />
            <ImageView
              src="/images/about-image-3.jpg"
              wrapperClassName="w-[100px] h-[100px] lg:w-[182px] lg:h-[224px]"
              width={900}
              height={1300}
            />
          </div>
        </div>
      </div>
      {/* What We Provide Section */}
      <section>
        <div className="mt-16 flex flex-col items-center">
          <div className="flex w-fit flex-col gap-3.5">
            <h2 className="text-center text-4xl md:text-5xl">
              What We Provide?
            </h2>
            <ImageView
              src="/icons/wavy-line.svg"
              width={150}
              height={15}
              wrapperClassName="self-center"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-7 rounded-2xl p-3 shadow lg:p-12">
                <IconBox
                  icon="badge-percent"
                  size={{ mobile: 50, nonMobile: 100 }}
                  className="text-brand-1"
                />
                <h3 className="text-center text-xl md:text-2xl">
                  Best Prices & Offers
                </h3>
                <p className="text-center text-sm text-body lg:text-lg">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
              <div className="flex flex-col items-center gap-7 rounded-2xl p-3 shadow lg:p-12">
                <IconBox
                  icon="vector-square"
                  size={{ mobile: 50, nonMobile: 100 }}
                  className="text-brand-1"
                />
                <h3 className="text-center text-xl md:text-2xl">
                  Wide Assortment
                </h3>
                <p className="text-center text-sm text-body lg:text-lg">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
              <div className="flex flex-col items-center gap-7 rounded-2xl p-3 shadow lg:p-12">
                <IconBox
                  icon="truck"
                  size={{ mobile: 50, nonMobile: 100 }}
                  className="text-brand-1"
                />
                <h3 className="text-center text-xl md:text-2xl">
                  Free Delivery
                </h3>
                <p className="text-center text-sm text-body lg:text-lg">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
              <div className="flex flex-col items-center gap-7 rounded-2xl p-3 shadow lg:p-12">
                <IconBox
                  icon="undo-2"
                  size={{ mobile: 50, nonMobile: 100 }}
                  className="text-brand-1"
                />
                <h3 className="text-center text-xl md:text-2xl">
                  Easy Returns
                </h3>
                <p className="text-center text-sm text-body lg:text-lg">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
              <div className="flex flex-col items-center gap-7 rounded-2xl p-3 shadow lg:p-12">
                <IconBox
                  icon="handshake"
                  size={{ mobile: 50, nonMobile: 100 }}
                  className="text-brand-1"
                />
                <h3 className="text-center text-xl md:text-2xl">
                  100% Satisfaction
                </h3>
                <p className="text-center text-sm text-body lg:text-lg">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
              <div className="flex flex-col items-center gap-7 rounded-2xl p-3 shadow lg:p-12">
                <IconBox
                  icon="percent"
                  size={{ mobile: 50, nonMobile: 100 }}
                  className="text-brand-1"
                />
                <h3 className="text-center text-xl md:text-2xl">
                  Great Daily Deal
                </h3>
                <p className="text-center text-sm text-body lg:text-lg">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Performance */}
      <section className="mt-16">
        <div className="flex flex-col gap-14 xl:flex-row">
          <div className="hidden items-center gap-6 md:flex">
            <ImageView
              src="/images/performance-1.png"
              wrapperClassName="w-[325px] h-[438px]"
              imageClassName="rounded-2xl"
              width={1008}
              height={1245}
            />
            <ImageView
              src="/images/performance-2.jpg"
              wrapperClassName="w-[426px] h-[575px]"
              imageClassName="rounded-2xl"
              width={1072}
              height={1281}
            />
          </div>
          <div className="flex max-w-[480px] flex-col gap-5 lg:mt-6">
            <h2 className="text-2xl text-body">Our performance</h2>
            <h3 className="text-2xl md:text-3xl">
              Your Partner for e-commerce grocery solution
            </h3>
            <p className="text-body">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia
            </p>
            <p className="text-body">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </div>
        </div>
      </section>
      <div
        className="mt-16 flex flex-col gap-10 rounded-[20px] bg-[#4B675A] p-8 md:flex-row lg:w-full lg:gap-20 lg:p-28"
        ref={ref}
      >
        <div className="flex flex-col items-center gap-2.5 text-white">
          <div className="flex items-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
            <NumberFlow
              value={numbers.years}
              transformTiming={{ duration: 1000 }}
            />
            <span>+</span>
          </div>
          <div className="text-center">Glorious years</div>
        </div>
        {/* ------------------------- */}
        <div className="flex flex-col items-center gap-2.5 text-white">
          <div className="flex items-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
            <NumberFlow
              value={numbers.clients}
              transformTiming={{ duration: 1500 }}
            />
            <span>+</span>
          </div>
          <div className="text-center">Happy clients</div>
        </div>
        {/* ------------------------ */}
        <div className="flex flex-col items-center gap-2.5 text-white">
          <div className="flex items-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
            <NumberFlow
              value={numbers.projects}
              transformTiming={{ duration: 1800 }}
            />
            <span>+</span>
          </div>
          <div className="text-center">Projects complete</div>
        </div>
        {/* ----------------------- */}
        <div className="flex flex-col items-center gap-2.5 text-white">
          <div className="flex items-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
            <NumberFlow
              value={numbers.advisors}
              transformTiming={{ duration: 1400 }}
            />
            <span>+</span>
          </div>
          <div className="text-center">Team advisor</div>
        </div>
        {/* ---------------------- */}
        <div className="flex flex-col items-center gap-2.5 text-white">
          <div className="flex items-center text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
            <NumberFlow
              value={numbers.sale}
              transformTiming={{ duration: 1000 }}
            />
            <span>+</span>
          </div>
          <div className="text-center">Products Sale</div>
        </div>
      </div>
      <section className="mt-16">
        <div className="mb-12 flex flex-col gap-3.5">
          <h2 className="text-center text-4xl md:text-5xl">Our Team</h2>
          <ImageView
            src="/icons/wavy-line.svg"
            width={150}
            height={15}
            wrapperClassName="self-center"
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex max-w-[400px] flex-col">
            <h2 className="text-xl text-brand-1">Our team</h2>
            <h3 className="mt-2.5 text-2xl md:text-3xl">
              Meet Our Expert Team
            </h3>
            <p className="mt-12 text-body">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <p className="mt-6 text-body">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam
              massa dolor imperdiet neccon sequata congue idsem. Maecenas
              malesuada faucibus finibus.
            </p>
            <button className="mt-6 self-start rounded-sm bg-brand-1 px-7 py-3.5 text-white">
              View All Members
            </button>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <ImageView
                src="/images/ceo.jpg"
                wrapperClassName="w-[200px] h-[250px] xl:w-[480px] xl:h-[571px]"
                imageClassName="rounded-2xl"
                width={1009}
                height={1251}
              />
              <div className="flex w-[100px] flex-col items-center px-24 py-7 shadow">
                <h3 className="text-2xl">H. Merinda</h3>
                <h4 className="mt-1.5 text-body">CEO & Co-Founder</h4>
                <div className="mt-6 flex gap-3.5 text-brand-1">
                  <IconBox icon="twitter" />
                  <IconBox icon="youtube" />
                  <IconBox icon="instagram" />
                </div>
              </div>
            </div>
            <div>
              <ImageView
                src="/images/engineer.jpg"
                wrapperClassName="w-[200px] h-[250px] xl:w-[480px] xl:h-[571px]"
                imageClassName="rounded-2xl"
                width={806}
                height={1066}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
