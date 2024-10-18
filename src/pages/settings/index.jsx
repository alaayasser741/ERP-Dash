import { LogoIcon } from "../../assets/icons";
const index = () => {
  return (
    <main className="flex items-center justify-center h-[70vh] gap-2">
      <div className="bg-primary w-[130px] h-[130px] rounded-full flex items-center justify-center">
        <LogoIcon />
      </div>
      <h1 className="text-primary text-3xl font-semibold">Settings</h1>
    </main>
  );
};

export default index;
