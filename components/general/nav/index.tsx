const Nav = () => {
  return (
    <nav className=" flex ml-10 mr-20 gap-10 items-center py-4 ">
      <h1 className="text-4xl w-1/4">Logo</h1>
      <ul className="flex justify-between  items-center w-full">
        <li>
          <a href="#">System</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
