import { Collection } from "./../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public collection: Collection<T, K>, public parent: Element) {}

  render(): void {
    this.parent.innerHTML = '';
    const templateEl = document.createElement('template');
    const { models } = this.collection;

    models.forEach(model => {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateEl.content.append(itemParent);
    });

    this.parent.append(templateEl.content);
  }

  abstract renderItem(model: T, itemParent: Element): void;
}