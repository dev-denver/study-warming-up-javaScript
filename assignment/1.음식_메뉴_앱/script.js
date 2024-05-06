import data from './data.js';

const navigation = document.querySelector('.navigation');
const coffeeList = document.querySelector('.coffee-list');
const coffeeItem = document.querySelector('.coffee-item');

//데이터 get
const getContent = ({name, imgUrl, description, price}) => {
    const content = coffeeItem.cloneNode(true);
    const [imgElement, textContainer] = content.children;
    const [titleElement, priceElement, descptionElement] = 
        textContainer.children;
        setElementContent(titleElement, name);
        setImageAttributes(imgElement, imgUrl, `${name} 이미지`);
        setElementContent(priceElement, `${price}원`);
        setElementContent(descptionElement, description);
        return content;
};

const setElementContent = (element, content) => {
    element.innerText = content;
};

const setImageAttributes = (imangeElement, src, altText) => {
    imangeElement.src = src;
    imangeElement.alt = altText;
};

const renderMenuList = menu => {
    const renderList = menu.map(item => getContent(item));
    coffeeList.replaceChildren(...renderList);
};

const getRenderData = e => {
    const filter = e.target.id.replace('select-','');
    const renderData = 
        filter == 'all' ? data : data.filter(item => item.type === filter);
    return renderData;
};

navigation.addEventListener('change', e => {
    renderMenuList(getRenderData(e));
});

renderMenuList(data);