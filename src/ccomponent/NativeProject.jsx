import React from "react";
import guess from "../image/guess.png";
import Button from "./Button.component";
import cpMobile from "../image/naijacpMobile.png";

const NativeProject = () => {
  return (
    <div>
      <h2 className="font-bold text-[#A1B57D] text-2xl text-center py-5">
        React Native Projects
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-2">
        <div className="flex flex-col items-center text-center shadow-2xl">
          <a
            href="https://expo.dev/artifacts/eas/6igANjEHNQkHxRFoM1ajna.apk"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="dark:text-[#B33030] font-bold pb-2">
              Number Guesser
            </h3>
          </a>
          <a
            href="https://expo.dev/artifacts/eas/6igANjEHNQkHxRFoM1ajna.apk"
            target="_blank"
            rel="noreferrer"
          >
            <img className="mx-auto  h-60 rounded " src={guess} alt="profile" />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A Simple and fun react native game that lets the phone guess the
            number a user selected.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"React"} />
            <Button value={"JavaScript"} />
            <Button value={"React Native"} />
            <Button value={"React Native Navigator"} />
            <Button value={"Expo"} />
          </div>
        </div>
        <div className="flex flex-col items-center py-3 text-center shadow-2xl">
          <a
            href="https://expo.dev/artifacts/eas/vUd4nDbU5Z58sXTKqXjPVH.apk"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="font-bold pb-2 dark:text-[#B33030]">Naija CP App</h3>
          </a>
          <a
            href="https://expo.dev/artifacts/eas/vUd4nDbU5Z58sXTKqXjPVH.apk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="mx-auto  h-60 rounded "
              src={cpMobile}
              alt="profile"
            />
          </a>
          <p className="dark:text-white py-2 text-gray-600">
            A Mobile Version of NaijaCP
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Button value={"React"} />
            <Button value={"JavaScript"} />
            <Button value={"React Native"} />
            <Button value={"React Native Navigator"} />
            <Button value={"Expo"} />
            <Button value={"Paystack"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativeProject;
