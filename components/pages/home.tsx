import Nav from "@/components/general/nav";
import Button from "../general/button";

const HomeComponent = () => {
  return (
    <main className=" flex flex-col h-screen text-primary max-w-[1000px]">
      <Nav />
      {/* content */}
      <div className=" h-full flex flex-col justify-center">
        <h1 className="text-5xl">
          WELCOME TO THE APPNAME WHERE <br /> HABITS CONTAINS XP.
        </h1>
        <p className="font-custom text-sm w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, ab.
          Est sed libero obcaecati tempora dolorum saepe provident dolorem,
          blanditiis iusto consectetur corrupti autem veniam excepturi, rem
          illum id ea?
        </p>
        <div>
          <Button />
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
