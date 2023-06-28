import React, {useState} from 'react'


export default function CommunityInfo() {
    const [hide, setHide] = useState(true)

    function showHideInfo(){
        setHide(!hide)
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="font-bold text-lg">About fourbeing</div>
                <div className="text-right pt-2">
                  <button
                      onClick={showHideInfo}
                      className="text-gray-400">
                      {hide ? "See more" : "Hide"}
                  </button>
                  </div>
              </div>
            {
              hide ?
              <><p>fourbeing is a place to connect.</p></>
              :
              <>
                  <p>fourbeing is a place to connect.</p>
                  <hr className="border-t border-gray-100 py-1"></hr>
                  <p>Inspired by the <a>Brahmaviharas</a>, this space represents the practice of the tenets of the immeasurables, which consists of:</p>
                  <div className="px-2">
                    <ul>
                      <li>upekshā - <span className="text-sm">calm neutrality and impartiality, letting go; imperturbability.</span></li>
                      <li>umuditā - <span className="text-sm">joy in another’s joy; confelicity.</span></li>
                      <li>karunā - <span className="text-sm">practicing compassion for, and the willingness to bear the suffering of other beings.</span></li>
                      <li>maitrī - <span className="text-sm">loving kindness.</span></li>
                    </ul>
                  </div>
                  <hr className="border-t border-gray-100 py-1"></hr>
                  <p><span className="text-sm">"The Brahmaviharas are four elements of true love. They are called Immeasurable, because if you practice them, they will grow every day until they embrace the whole world. You will become happier and those around you will become happier, also.”</span></p>
                  <div className="text-right text-sm">Thich Nhat Hanh</div>
                  <hr className="border-t border-gray-100 py-1"></hr>
              </>

            }

        </>
    )
}
