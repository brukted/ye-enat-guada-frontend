import { StarIcon } from "@heroicons/react/outline"
import { StarIcon as StarIconFilled } from "@heroicons/react/solid"

export const Rating = (props) => {
    return (
        <div className="flex flex-row content-center items-center gap-3">
            <div className="flex flex-row content-center items-center gap-1 text-yellow-400">
                {

                    Math.floor(props.rating) >= 1 ? <StarIconFilled className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />
                }
                {

                    Math.floor(props.rating) >= 2 ? <StarIconFilled className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />
                }
                {

                    Math.floor(props.rating) >= 3 ? <StarIconFilled className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />
                }
                {

                    Math.floor(props.rating) >= 4 ? <StarIconFilled className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />
                }
                {

                    Math.floor(props.rating) >= 5 ? <StarIconFilled className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />
                }
            </div>
            <span className="text-lg">{props.rating}</span>
        </div>
    )
}