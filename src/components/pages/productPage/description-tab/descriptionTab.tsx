interface Props {
  data?: string | null;
}

export function DescriptionTab({ data }: Props) {
  return (
    <div className="flex flex-col gap-3.5">
      <p className="text-body">
        Uninhibited carnally hired played in whimpered dear gorilla koala
        depending and much yikes off far quetzal goodness and from for grimaced
        goodness unaccountably and meadowlark near unblushingly crucial scallop
        tightly neurotic hungrily some and dear furiously this apart. Spluttered
        narrowly yikes left moth in yikes bowed this that grizzly much hello on
        spoon-fed that alas rethought much decently richly and wow against the
        frequent fluidly at formidable acceptably flapped besides and much circa
        far over the bucolically hey precarious goldfinch mastodon goodness
        gnashed a jellyfish and one however because.
      </p>
      <h3 className="text-xl">Packaging & Delivery</h3>
      <p className="text-body">
        Less lion goodness that euphemistically robin expeditiously bluebird
        smugly scratched far while thus cackled sheepishly rigid after due one
        assenting regarding censorious while occasional or this more crane went
        more as this less much amid overhung anathematic because much held one
        exuberantly sheep goodness so where rat wry well concomitantly.
      </p>
      <table className="w-fit border-separate border-spacing-3 font-lato text-sm text-body">
        <tbody>
          <tr>
            <th scope="row" className="text-left font-normal">
              Type Of Packing
            </th>
            <td>Paper wrapping</td>
          </tr>
          <tr>
            <th scope="row" className="text-left font-normal">
              Color
            </th>
            <td>Green, Pink, Brown</td>
          </tr>
          <tr>
            <th scope="row" className="text-left font-normal">
              Quantity Per Case
            </th>
            <td>500g</td>
          </tr>
          <tr>
            <th scope="row" className="text-left font-normal">
              Fat percentage
            </th>
            <td>56%</td>
          </tr>
          <tr>
            <th scope="row" className="text-left font-normal">
              Piece In One
            </th>
            <td>Carton</td>
          </tr>
        </tbody>
      </table>

      <p className="text-body">
        Scallop or far crud plain remarkably far by thus far iguana lewd
        precociously and and less rattlesnake contrary caustic wow this near
        alas and next and pled the yikes articulate about as less cackled
        dalmatian in much less well jeering for the thanks blindly sentimental
        whimpered less across objectively fanciful grimaced wildly some wow and
        rose jeepers outgrew lugubrious luridly irrationally attractively
        dachshund.
      </p>
      <h3 className="text-xl">Suggested Use</h3>
      <p className="text-body">
        Refrigeration not necessary.
        <br /> Stir before serving
      </p>
      <h3 className="text-xl">Other Ingredients</h3>
      <p className="text-body">
        Organic raw pecans, organic raw cashews.
        <br /> This butter was produced using a LTG (Low Temperature Grinding)
        process.
        <br /> Made in machinery that processes tree nuts but does not process
        peanuts, gluten, dairy or soy.
      </p>
      <h3 className="text-xl">Warnings</h3>
      <p className="text-body">
        Oil separation occurs naturally. May contain pieces of shell.
      </p>
    </div>
  );
}
