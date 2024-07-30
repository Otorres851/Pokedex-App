/* Pokemon Loader */
import { DotSpinner } from "@uiball/loaders";
import "../loader/Loader.css";

export const Loader = () => {
	return (
        <div className="loader">
            <DotSpinner size={40} speed={0.9} color="white" />
        </div>
    );
};