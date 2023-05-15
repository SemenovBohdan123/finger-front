interface IUser {
  id?: number;
  name: string;
  age: number;
  user_finger_img: string;
}

interface IInputs {
  name: string;
  age: number;
  img: File[];
}

interface IResult {
  message: string;
  source?: number;
  user?: IUser;
  user_finger_img?: string;
}

interface CheckUserProps {
  setResults: Dispatch<any>;
  results: IResult[];
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}
interface HeadreProps {
  selectedAction: number;
  setSelectedAction: Dispatch<React.SetStateAction<number>>;
}

interface LastResultsProps {
  data: IResult[] | null;
}
interface MainPageProps {
  selectedAction: number;
}
interface ResultProps {
  result: IResult;
  checkImage: any;
  onReload: () => void;
}
