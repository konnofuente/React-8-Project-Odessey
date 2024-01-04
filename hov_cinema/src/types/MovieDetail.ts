import {Movie} from "./Movies";

export interface MovieDetail extends Movie {
    Director: String;
    Actor: String;
    Runtime: String;
    Genre: String;

}