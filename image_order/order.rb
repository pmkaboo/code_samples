module Images

  class Order
    # data = [{:user_id, :source, ...}, ...]
    # options = {sources: ['source1', 'source2', ...], order: 'order'}

    def initialize(data, options)
      @data = Data.new(data, options[:sources])
      @order = options[:order]
    end

    def run
      return grouped_rows if @order == 'grouped'
      return randomized_rows if @order == 'random'

      default_rows
    end

    private

    def grouped_rows
      @data.grouped_by_user_id.flatten(1)
    end

    def randomized_rows
      Randomizer.new(@data.grouped_by_user_id).run
    end

    def default_rows
      @data.rows
    end
  end

end
