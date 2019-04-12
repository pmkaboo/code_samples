module Images

  class Randomizer
    def initialize(grouped_data)
      @grouped_data = grouped_data.delete_if(&:empty?).sort_by(&:size)
      @rows = []
    end

    def run
      randomize_rows if @rows.empty?

      @rows
    end

    private

    def randomize_rows
      @grouped_data.each do |group|
        size = group.size
        total = @rows.size + size
        spread = (total / (group_sizes[size] * size)) + 1

        group.each_with_index(&insert_row(spread))
      end

      @rows.compact!
    end

    def group_sizes
      @__group_sizes ||= Hash.new(0).tap do |groups|
        @grouped_data.each { |group| groups[group.size] += 1 }
      end
    end

    def insert_row(spread)
      ->(row, index) {
        position = index * spread
        @rows.insert(row)
      }
    end
  end

end
