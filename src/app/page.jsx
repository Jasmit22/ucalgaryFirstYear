export default function Home() {
  return (
    <main>
      <div className="flex-col justify-center text-center mt-4">
        <h3 className="font-bold text-lg mb-4">
          Color Palette (With Black and White)
        </h3>
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="bg-ucalgaryRed text-white p-4 font-bold">
                ucalgaryRed
              </td>
            </tr>
            <tr>
              <td className="bg-ucalgaryGold text-black p-4 font-bold">
                ucalgaryGold
              </td>
            </tr>
            <tr>
              <td className="bg-ucalgaryLightOrange text-black p-4 font-bold">
                ucalgaryLightOrange
              </td>
            </tr>
            <tr>
              <td className="bg-ucalgaryDarkOrange text-white p-4 font-bold">
                ucalgaryDarkOrange
              </td>
            </tr>
            <tr>
              <td className="bg-ucalgaryLightGrey text-black p-4 font-bold">
                ucalgaryLightGrey
              </td>
            </tr>
            <tr>
              <td className="bg-ucalgaryDarkGrey text-white p-4 font-bold">
                ucalgaryDarkGrey
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
