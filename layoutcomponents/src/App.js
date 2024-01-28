import { SplitScreen } from "./components/split-screen";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { NumberedList } from "./components/lists/NumberedList";
import { Modal } from "./components/modal/modal";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <>
      <Modal>
        <SplitScreen leftWidth={1} rightWidth={3}>
          <LeftSideComp title={"Right"} />
          <RightSideComp title={"Left"} />
        </SplitScreen>
        <br />
        <RegularList
          items={authors}
          sourceName={"author"}
          ItemComponent={SmallAuthorListItem}
        />
        <NumberedList
          items={authors}
          sourceName={"author"}
          ItemComponent={LargeAuthorListItem}
        />
        <RegularList
          items={books}
          sourceName={"book"}
          ItemComponent={SmallBookListItem}
        />
        <NumberedList
          items={books}
          sourceName={"book"}
          ItemComponent={LargeBookListItem}
        />
      </Modal>
    </>
  );
}

export default App;
