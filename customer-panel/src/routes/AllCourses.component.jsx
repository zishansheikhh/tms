import Topbar from "../components/topbar/topbar.component"
import Footer from "../components/footer/footer.component"
import CoursesLists from "../components/courses-lists/courses-list.components";

const AllCourses = () => {
  return (
    <div>
      <Topbar />
      <CoursesLists />
      <Footer />
    </div>
  );
};

export default AllCourses;
