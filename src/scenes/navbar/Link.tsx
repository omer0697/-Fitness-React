import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page : string;
  selectedPage : string;
  setSelectedPage : (page : string) => void;
}

function Link({
  page,
  selectedPage,
  setSelectedPage,
}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  console.log(lowerCasePage, "lowerCasePage")

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link