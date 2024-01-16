import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home() {
	return (
		<div>
			<Featured />
			<CategoryList />
			<div className="flex flex-col lg:flex-row mt-10 gap-10">
				<CardList />
				<Menu />
			</div>
		</div>
	);
}
