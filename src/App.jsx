import Card from "./components/Card";

export default function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 items-start ">
      <Card imgSrc="/public/heaven.png.jpg"
        title="Heaven"
        author="Bryan Adams"
        desc="Bryan Adams' song Heaven is a classic 1984 rock ballad about deep romantic devotion and the feeling that being with the right person is the ultimate form of peace and happiness on earth."
      />

      <Card imgSrc="/public/exile.png"
        title="Exile"
        author="Taylor Swift"
        desc="Taylor Swift's song exile is about two former lovers who meet again by chance after an emotional breakup"
      />
      <Card imgSrc="/public/pdc.png.jpg"
        title="Merry Chistmas, Please Don't Call"
        author="Bleachers"
        desc="Bleachers' song Merry Christmas, Please Don't Call is a contemporary 2024 indie pop ballad about the bittersweet struggle of emotional boundaries and the painful realization that true holiday peace sometimes requires letting go from afar."
      />
      <Card imgSrc="/public/thecure.jpeg"
        title="The Cure"
        author="Olivia Rodrigo"
        desc="Olivia Rodrigo's song the cure is a contemporary 2026 indie rock and pop ballad about the mature realization that romantic love cannot automatically fix or heal one's deep-seated personal insecurities."
      />
      <Card imgSrc="/public/sorrowful.png"
        title="A Sorrowful Reunion"
        author="Reality Club"
        desc="Reality Club's song A Sorrowful Reunion is a poignant 2019 Indonesian indie rock and alternative ballad about the painful, inevitable collision of crossing paths with a former lover and confronting the fading illusion of compatibility."
      />
    </main>
  )

}