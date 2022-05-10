
export const sort = ({selectSort, posts}) => {
    switch (selectSort) {
      case "titleIncrement":
        return [...posts].sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      case "titleDecrement":
        return [...posts].sort((a, b) =>
          b.title.toLowerCase().localeCompare(a.title.toLowerCase())
        );
      case "authorIncrement":
        return [...posts].sort((a, b) =>
          a.author.toLowerCase().localeCompare(b.author.toLowerCase())
        );
      case "authorDecrement":
        return [...posts].sort((a, b) =>
          b.author.toLowerCase().localeCompare(a.author.toLowerCase())
        );
      case "dateIncrement":
        return [...posts].sort((a, b) => a.id - b.id);
      case "dateDecrement":
        return [...posts].sort((a, b) => b.id - a.id);
      default:
        return posts;
    }
  };