import React, { useState } from "react";
import Nav from "../../components/navbar/Nav";
import { useForm } from "react-hook-form";
import { getData, sendData } from "../../config/firebase/firebasemethods";
import { auth } from "../../config/firebase/firebasemethods";
import { onAuthStateChanged } from "firebase/auth";


function Dashboard() {
  const [dataArr, SetArr] = useState([{
    title:'hgjhgjhg',
    blog: 'fgghfhf'
  }]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    }
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const renderBlogs = async () => {
    try {
      const blogs = await getData("blog's", auth.currentUser.uid);
      // dataArr.push(blogs);
      // console.log(blogs);
      // sendData([blogs])
    } catch (error) {
      console.error(error);
    }
  };



  const addBlogs = (data) => {
    const blogs = {
      title: data.title,
      blog: data.blog,
      uid: auth.currentUser.uid,
    };
    sendData(blogs, "blog's");
    renderBlogs();
  };

  return (
    <>
      <Nav />
      <div className="mx-10">
        <div className=" w-full h-full">
          <div className="mt-10 flex justify-center  items-center">
            <div className=" ">
              <h1 className="text-center text-3xl font-bold text-[#63ecdc]">
                Publish Blog
              </h1>
              {/*publish blog */}
              <div className="bg-[#00D9C0] p-8 rounded-2xl w-[50vw] shadow-zinc-500 shadow-lg mt-5">
                <form onSubmit={handleSubmit(addBlogs)}>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border-none shadow-lg shadow-zinc-700 bg-black rounded-md"
                      placeholder="Title"
                      {...register("title", { required: true, minLength: 4 })}
                    />
                    <br />
                    {errors.title && (
                      <span className="text-red-500 font-semibold">
                        Minimum Lenght 5
                      </span>
                    )}
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Write Blog Here..."
                      className=" bg-black border-none shadow-lg shadow-zinc-700 textarea textarea-bordered textarea-md w-full "
                      defaultValue={""}
                      {...register("blog", { required: true, minLength: 14 })}
                    />
                    <br />
                    {errors.blog && (
                      <span className="text-red-500 font-semibold">
                        Minimum Lenght 15
                      </span>
                    )}
                  </div>
                  <div className=" mt-2 flex justify-center">
                    <button className="btn btn-md  bg-black shadow-lg shadow-zinc-900 border-none text-[#72f1e3] ">
                      Publish Blog
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* My Blogs  */}
        <div className="mt-8">
          <h1 className="font-sans text-3xl text-[#00D9C0] font-bold">
            My blogs{" "}
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          {dataArr.map((item) => {
            return (
              <>
                <div className=" p-5 rounded-2xl bg-[#00D9C0] w-[50vw] shadow-2xl mt-5 text-black">
                  <div className="flex gap-2">
                    <div className="avatar">
                      <div className="w-14 rounded">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-sans text-md text-black font-semibold">
                        {item.title}
                      </h1>
                      <p className="text-zinc-700 font-medium">
                        Hasan raza-August 16
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-black font-medium">{item.blog}</p>
                  </div>
                  <div className="mt-5 flex gap-4">
                    <button className="border  border-red-500 rounded shadow-md shadow-red-700 px-2 text-black font-bold">
                      Delete
                    </button>
                    <button className="border-none rounded shadow-md shadow-zinc-900 px-2  text-black font-bold">
                      Edit
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
