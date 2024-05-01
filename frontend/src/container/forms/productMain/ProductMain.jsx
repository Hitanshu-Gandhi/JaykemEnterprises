import React from "react";
import { Input, Textarea, Button, Typography } from "@material-tailwind/react";

const productMain = () => {
  return (
    <div className="bg-brown-50 h-screen">
      <div className=" grid justify-center items-center align-middle">
        <Typography
          variant="h4"
          color="blue-gray"
          className=" text-center underline"
        >
          Product Main Form
        </Typography>
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1">
            <div>
              <Typography variant="h6" color="blue-gray" className="m-2">
                Image:
              </Typography>
              <Input
                type="file"
                size="lg"
                className=" !border-blue-200 focus:!border-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="m-2">
                Category:
              </Typography>
              <Input
                size="lg"
                placeholder="Title"
                className=" !border-blue-200 focus:!border-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="m-2">
                Description:
              </Typography>
              <Textarea
                size="lg"
                placeholder="Description"
                className=" !border-blue-200 focus:!border-blue-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>

          <Button className="m-4 bg-blue-400" fullWidth>
            Next
          </Button>
        </form>
      </div>
    </div>
  );
};

export default productMain;
