import { mount } from 'enzyme';
import { DataGridViews, viewFunction } from '../data_grid_views';
import { GridBaseViews } from '../../grid_base/grid_base_views';

describe('DataGridViews', () => {
  describe('View', () => {
    it('default render', () => {
      const props = {
        views: [
          { name: 'view1', view: 'viewComponent1' },
          { name: 'view2', view: 'viewComponent2' },
        ],
      } as any;
      const tree = mount(viewFunction(props));

      expect(tree.find(GridBaseViews).length).toBe(1);
    });
  });

  describe('Logic', () => {
    describe('Getters', () => {
      it('Get views', () => {
        const props = {
          instance: {
            getView: (viewName) => viewName,
          },
        } as any;
        const component = new DataGridViews(props);

        expect(component.views.length > 0).toBe(true);
      });

      it('Get views when the instance has no views', () => {
        const props = {
          instance: {
            getView: jest.fn(),
          },
        } as any;
        const component = new DataGridViews(props);

        expect(component.views.length).toBe(0);
      });

      it('Get views when there is not instance', () => {
        const props = {} as any;
        const component = new DataGridViews(props);

        expect(component.views.length).toBe(0);
      });
    });
  });

  describe('Behavior', () => {
    describe('Effects', () => {
      it('update', () => {
        const resizingController = {
          resize: jest.fn(),
          fireContentReadyAction: jest.fn(),
        };
        const dataController = {
          isLoaded: jest.fn().mockReturnValue(true),
        };
        const props = {
          instance: {
            getController: jest.fn().mockImplementation((name) => (name === 'resizing' ? resizingController : dataController)),
          },
        } as any;
        const component = new DataGridViews(props);

        component.update();

        expect(props.instance.getController).toBeCalledTimes(2);
        expect(props.instance.getController.mock.calls).toEqual([['data'], ['resizing']]);

        expect(resizingController.resize).toBeCalledTimes(1);
        expect(resizingController.fireContentReadyAction).toBeCalledTimes(1);
        expect(dataController.isLoaded).toBeCalledTimes(1);
      });

      it('update when data is not loaded', () => {
        const resizingController = {
          resize: jest.fn(),
          fireContentReadyAction: jest.fn(),
        };
        const dataController = {
          isLoaded: jest.fn().mockReturnValue(false),
        };
        const props = {
          instance: {
            getController: jest.fn().mockImplementation((name) => (name === 'resizing' ? resizingController : dataController)),
          },
        } as any;
        const component = new DataGridViews(props);

        component.update();

        expect(props.instance.getController).toBeCalledTimes(2);
        expect(props.instance.getController.mock.calls).toEqual([['data'], ['resizing']]);

        expect(resizingController.resize).toBeCalledTimes(1);
        expect(resizingController.fireContentReadyAction).toBeCalledTimes(0);
        expect(dataController.isLoaded).toBeCalledTimes(1);
      });

      it('update without instance', () => {
        const props = {} as any;
        const component = new DataGridViews(props);

        expect(component.update.bind(component)).not.toThrow();
      });
    });
  });
});
