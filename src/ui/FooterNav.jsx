import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function FooterNav() {
  return (
    <nav>
      <ul
        style={{ fontFamily: "'League Spartan', sans-serif" }}
        className="flex flex-col items-center gap-5 lg:flex-row"
      >
        <div className="flex flex-col gap-5 items-center">
          <li className="flex gap-1 hover:cursor-pointer hover:underline hover:underline-offset-2">
            Twitter <ArrowUpRightIcon className="w-3" />
          </li>
          <li className="flex gap-1 hover:cursor-pointer hover:underline hover:underline-offset-2">
            Discord <ArrowUpRightIcon className="w-3" />
          </li>
          <li className="flex gap-1 hover:cursor-pointer hover:underline hover:underline-offset-2">
            Instagram <ArrowUpRightIcon className="w-3" />
          </li>
        </div>

        <div className="flex flex-col gap-5 items-center">
          <li className="flex gap-1 hover:cursor-pointer hover:underline hover:underline-offset-2">
            Cookies <ArrowUpRightIcon className="w-3" />
          </li>
          <li className="flex gap-1 hover:cursor-pointer hover:underline hover:underline-offset-2">
            Licenses <ArrowUpRightIcon className="w-3" />
          </li>
          <li className="flex gap-1 hover:cursor-pointer hover:underline hover:underline-offset-2">
            Contant <ArrowUpRightIcon className="w-3" />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default FooterNav;
