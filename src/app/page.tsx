import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Rating from "@/components/Rating";
import Chip from "@/components/Chip";
import DeliveryIcon from "../../public/assets/icons/delivery.svg";
import DiscountIcon from "../../public/assets/icons/discount.svg";
import DownloadIcon from "../../public/assets/icons/download.svg";
import HandIcon from "../../public/assets/icons/hand.svg";
import FlagIcon from "../../public/assets/icons/flag.svg";
import BookmarkIcon from "../../public/assets/icons/bookmark.svg";
import ShoppingCardIcon from "../../public/assets/icons/shopping_cart.svg";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import ExtendableText from "@/components/ExtendableText";
import UserPanel from "@/components/UserPanel";
import { CustomAccordion } from "@/app/CustomAccordion";
import Carousel from "@/components/Сarousel";

const rating = 4.7;
const links = [
  { label: "Home", url: "/" },
  { label: "Shoes", url: "/shoes" },
  { label: "Men’s Shoes", url: "/shoes/mens" },
  { label: "Sneakers", url: "/shoes/mens/sneakers" },
  { label: "Tie Sneakers" },
];

export default function Home() {
  return (
    <main className={`flex max-h-full pr-9 gap-4 overflow-auto`}>
      <div className="flex-1">
        <Carousel
          images={[
            "/assets/productPreview.webp",
            "/assets/productPreview2.webp",
            "/assets/productPreview.webp",
            "/assets/productPreview2.webp",
          ]}
        />
      </div>
      <div className="max-w-[38%] flex flex-col pl-12 pt-5 pb-5 pr-8 h-max">
        <Breadcrumbs className="mb-8" links={links} />
        <h1 className={`text-2xl font-normal mb-2`}>
          Custom nike sneakers, white unisex sneakers. Alien art, sneakers nike
          air force 1
        </h1>
        <div className="flex gap-2 mb-6">
          <Rating rating={rating} />
          <div className="font-semibold">{rating}</div>
          <div className="text-gray-400 font-light">(40 reviews)</div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="text-2xl">$ 240.00</div>
          <div className="text-base line-through text-gray-400 font-extralight">
            $ 365.50
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          <Chip
            icon={<Image src={DiscountIcon} alt="discount icon" />}
            label="32% off"
          />
          <Chip
            icon={<Image src={DeliveryIcon} alt="delivery icon" />}
            label="Free delivery"
          />
          <Chip
            icon={<Image src={HandIcon} alt="hand icon" />}
            label="Handmade"
          />
          <Chip
            icon={<Image src={DownloadIcon} alt="download icon" />}
            label="Digital"
          />
        </div>
        <div className="mb-6">
          <Accordion title="Size">
            <div>Size options</div>
          </Accordion>
          <Accordion title="Color">
            <div>Color options</div>
          </Accordion>
          <Accordion noBorder title="Add Your Personalisation">
            <div>Personalization options</div>
          </Accordion>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <Button>Buy Now</Button>
          <Button variant="outlined">
            <div className="flex justify-center items-center gap-3">
              <Image
                src={ShoppingCardIcon}
                width={24}
                height={24}
                alt="shopping card icon"
              />
              Add to Cart
            </div>
          </Button>
          <Button variant="text">
            <div className="flex justify-center items-center gap-3">
              <Image
                src={BookmarkIcon}
                width={24}
                height={24}
                alt="bookmark icon"
              />
              Add to Wishlist
            </div>
          </Button>
        </div>
        <ExtendableText className="mb-6">
          Discover your inner world as a street artist in our custom-made Nike
          Air Force sneakers with vibrant graffiti patterns. These sneakers are
          not just shoes, they are a bold expression of individuality and
          creativity. Talented artists carefully paint each pair by hand, so no
          two pairs are exactly the same. The graffiti style gives the classic
          Nike Air Force design an urban touch, turning these sneakers into a
          real work of art that reflects the essence of street culture.
        </ExtendableText>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center flex-nowrap gap-2">
            <Image src={FlagIcon} alt="flag icon" />
            Report This Item
          </div>
          <div className="text-gray-400 font-extralight">June 16, 2024 </div>
        </div>

        <UserPanel
          className="mb-6"
          avatarUrl="/assets/avatar.png"
          username="olganikeart"
        />

        <div className="mb-10">
          <CustomAccordion title="PRICE HISTORY">
            <div>PRICE HISTORY content</div>
          </CustomAccordion>
          <CustomAccordion title="PAYMENT METHODS">
            <div>PAYMENT METHODS content</div>
          </CustomAccordion>
          <CustomAccordion title="SHARE">
            <div>SHARE content</div>
          </CustomAccordion>
          <CustomAccordion title="SHIPPING & RETURNS">
            <div>SHIPPING & RETURNS content</div>
          </CustomAccordion>
          <CustomAccordion noBorder title="WARRANTY">
            <div>WARRANTY content</div>
          </CustomAccordion>
        </div>
      </div>
    </main>
  );
}
