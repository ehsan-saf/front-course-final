import { ImageView } from "@/components";

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
          <h1 className="text-center text-[40px] lg:text-start">
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
    </div>
  );
}
