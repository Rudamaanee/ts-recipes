import { type Dispatch, type SetStateAction } from "react";
import "@/assets/scss/components/FilterBar.scss";

type Filter = {
    category: number | null;
    chef: string | null;
    tag: string | null;
};

type CategoryOption = {
    id: number;
    label: string;
};

type Props = {
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
    categoryOptions: CategoryOption[]; // ✅ 구조 변경
    chefOptions: string[];
    tagOptions: string[];
    onReset: () => void;
};

export default function FilterBar({
    filter,
    setFilter,
    categoryOptions,
    chefOptions,
    tagOptions,
    onReset,
}: Props) {

    // 타입 안전 toggle
    const toggle = <K extends keyof Filter>(key: K, value: Filter[K]) => {
        setFilter((prev) => ({
            ...prev,
            [key]: prev[key] === value ? null : value,
        }));
    };

    return (
        <div className="filter">
            <div className="filter__header">
                <h3>필터</h3>
                <button className="filter__reset" onClick={onReset}>
                    초기화
                </button>
            </div>

            {/* 카테고리 */}
            <div className="filter__group">
                <span className="filter__label">카테고리</span>
                {categoryOptions.map((c) => (
                    <button
                        key={c.id}
                        className={`filter__chip ${
                            filter.category === c.id ? "active" : ""
                        }`}
                        onClick={() => toggle("category", c.id)}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            {/* 태그 */}
            <div className="filter__group">
                <span className="filter__label">태그</span>
                {tagOptions.map((t) => (
                    <button
                        key={t}
                        className={`filter__chip ${
                            filter.tag === t ? "active" : ""
                        }`}
                        onClick={() => toggle("tag", t)}
                    >
                        #{t}
                    </button>
                ))}
            </div>

            {/* 셰프 */}
            <div className="filter__group">
                <span className="filter__label">셰프</span>
                {chefOptions.map((c) => (
                    <button
                        key={c}
                        className={`filter__chip ${
                            filter.chef === c ? "active" : ""
                        }`}
                        onClick={() => toggle("chef", c)}
                    >
                        {c}
                    </button>
                ))}
            </div>
        </div>
    );
}