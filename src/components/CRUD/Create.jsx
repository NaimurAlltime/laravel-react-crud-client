import http from "../../http";

const Create = () => {
  const { api } = http();
  const handleCreatePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const job = form.job.value;
    const email = form.email.value;
    const phone = form.phone.value;

    // console.log(name, job, email, phone);

    // http
    //   .post("/createpost", { name: name, job: job, email: email, phone: phone })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // access data from backend
    api
      .post(`/createpost`, { name: name, job: job, email: email, phone: phone })
      .then((response) => {
        console.log(response);
        //   setState({ ...state, title: "", content: "", user: "" });
        //   alert(`Post Title ${response.data.name} is created`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="p-7 bg-slate-100">
      <h2 className="text-3xl font-semibold text-center my-5">
        Create a New Post
      </h2>

      <div>
        <form onSubmit={handleCreatePost}>
          <div className="w-full md:flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                id="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job</span>
              </label>
              <input
                type="text"
                name="job"
                id="job"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="w-full md:flex gap-6 mt-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <input
            className="btn-md rounded-md text-lg btn-info mt-4"
            type="submit"
            value="Submit Now"
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
