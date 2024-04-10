import Link from "next/link";
import { List } from "../utils/types";
import styles from "../styles/Lists.module.css";

type ListProps = {
  data: Array<List>;
};

export function Lists(props: ListProps) {
  return (
    <div>
      <ul className={styles.list}>
        {props.data.map((t) => (
          <li key={t._id}>
            <Link passHref href={`/list/${t._id}`}>
              {t.title}
            </Link>
            {t.type && <>({t.type})</>}
          </li>
        ))}
      </ul>
    </div>
  );
}
