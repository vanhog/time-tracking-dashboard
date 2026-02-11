// Source - https://stackoverflow.com/a/74179841
// Posted by Mohammad Mustak Absar Khan
// Retrieved 2026-02-10, License - CC BY-SA 4.0

//content: ["./*.{html,js}", "./src/**/*.{html,js}"];

export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  safelist: [
    "bg-[url('../images/icon-work.svg')]",
    "bg-[url('../images/icon-play.svg')]",
    "bg-[url('../images/icon-study.svg')]",
    "bg-[url('../images/icon-exercise.svg')]",
    "bg-[url('../images/icon-social.svg')]",
    "bg-[url('../images/icon-self-care.svg')]",
  ],
};
