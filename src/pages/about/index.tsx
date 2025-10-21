import { IconBox, ImageView } from "@/components";
import { Link } from "lucide-react";

export default function Page() {
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
        <div className="flex flex-col gap-14 lg:flex-row">
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
    </div>
  );
}
